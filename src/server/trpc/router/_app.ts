import { router } from "../trpc";
import { authRouter } from "./auth";
import { bookmarkRouter } from "./bookmark";
import { favouriteRouter } from "./favourite";
// import { exampleRouter } from "./example";

export const appRouter = router({
  // example: exampleRouter,
  auth: authRouter,
  bookmark: bookmarkRouter,
  favourite: favouriteRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
