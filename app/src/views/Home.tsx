import { Button } from "lib-components/src/Button";
import * as React from "react";

export function Home() {
    return (
        <div>
            home <Button signal="warn">En knapp</Button>
        </div>
    );
}
