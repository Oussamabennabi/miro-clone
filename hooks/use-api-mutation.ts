import { useMutation } from "convex/react";
import { FunctionReference } from "convex/server";
import { useState } from "react";

export const useApiMutation = <T extends FunctionReference<"mutation">>(fnc: T) => {
  const [loading, setLoading] = useState(false);
  const apiMutate = useMutation<T>(fnc);

  const mutate = async (payload: Parameters<typeof apiMutate>[0]) => {
    setLoading(true);

    return apiMutate(payload)
      .then((res) => res)
      .catch((err) => {
        throw err;
      })
      .finally(() => setLoading(false));
  };
  return { loading, mutate };
};
