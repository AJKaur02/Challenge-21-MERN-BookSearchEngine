const { User } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require('apollo-server');  

module.exports = {
  Query: {
    async getSingleUser(parent, args, context) {
      const foundUser = await User.findOne({
        $or: [
          { _id: context.user ? context.user._id : args.id },
          { username: args.username },
        ],
      });

      if (!foundUser) {
        throw new Error("User not found");
      }
      return foundUser;
    },

    async me(parent, args, context) {
      if (!context.user) {
        throw new AuthenticationError("Not authenticated");
      }

      const user = await User.findById(context.user._id);
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    },
  },
  Mutation: {
    async createUser(parent, args) {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

    async login(parent, args) {
      const user = await User.findOne({
        $or: [{ username: args.username }, { email: args.email }],
      });

      if (!user) {
        throw new AuthenticationError("Invalid credentials");
      }

      const correctPw = await user.isCorrectPassword(args.password);
      if (!correctPw) {
        throw new AuthenticationError("Invalid credentials");
      }

      const token = signToken(user);
      return { token, user };
    },

    async saveBook(parent, { input }, context) {
      if (!context.user) {
        throw new AuthenticationError("Not authenticated");
      }

      try {
        const updatedUser = await User.findByIdAndUpdate(
          context.user._id,
          { $addToSet: { savedBooks: input } },
          { new: true, runValidators: true }
        );
        return updatedUser;
      } catch (err) {
        console.error("Error saving book:", err);
        throw new Error("Could not save book");
      }
    },

    async deleteBook(parent, { bookId }, context) {
      if (!context.user) {
        throw new AuthenticationError("Not authenticated");
      }

      const updatedUser = await User.findByIdAndUpdate(
        context.user._id,
        { $pull: { savedBooks: { bookId } } },
        { new: true }
      );

      if (!updatedUser) {
        throw new Error("User not found or book not saved");
      }
      return updatedUser;
    },
  },
};
