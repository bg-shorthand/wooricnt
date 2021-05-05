import { specialCollectionRef } from "fb/firebase";

const getSpecial = async () => {
  const snapshot = await specialCollectionRef.get();
  return snapshot;
};

export { getSpecial };
