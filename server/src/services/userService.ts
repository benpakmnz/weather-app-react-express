import { User, UserAttrs, UserDoc } from "../models/user";

class mongoDbClient {
  constructor() {}

  handleUserBuild = async (userParams: UserAttrs) => {
    try {
      const user = await User.build(userParams);
      return await user.save();
    } catch (err) {
      return err;
    }
  };

  handleFindById = async (uid: string) => {
    try {
      return await User.findById(uid);
    } catch (err) {
      return err;
    }
  };

  handleFindOne = async (param: Partial<UserAttrs>) => {
    try {
      return await User.findOne(param);
    } catch (err) {
      return err;
    }
  };

  handleUpdateUser = async (user: UserDoc) => {
    try {
      return await user.save();
    } catch (err) {
      return err;
    }
  };
}

export default mongoDbClient;
