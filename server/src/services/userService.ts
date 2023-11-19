import { User, UserAttrs, UserDoc } from "../models/user";

const handleUserBuild = async (userParams: UserAttrs) => {
  try {
    const user = await User.build(userParams);
    return await user.save();
  } catch (err) {
    return err;
  }
};

const handleFindById = async (uid: string) => {
  try {
    return await User.findById(uid);
  } catch (err) {
    return err;
  }
};

const handleFindOne = async (param: Partial<UserAttrs>) => {
  try {
    return await User.findOne(param);
  } catch (err) {
    return err;
  }
};

const handleUpdateUser = async (user: UserDoc) => {
  try {
    return await user.save();
  } catch (err) {
    return err;
  }
};

export { handleUpdateUser, handleFindOne, handleFindById, handleUserBuild };
