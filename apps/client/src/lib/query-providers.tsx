"use client";

import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import { store } from "~/state/store";

export default function QueryProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SnackbarProvider
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      preventDuplicate
    >
      <Provider store={store}>{children}</Provider>
    </SnackbarProvider>
  );
}
