import { ClientComponentOne } from "../../src/components/client-component-one";;
import { ServerComponentOne } from "../../src/components/server-component-one";

export default function InterleavingPage() {
  return (
    <>
      <h1>Interleaving Page</h1>
      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
    </>
  );
}