import React from "react";
import { Gradient } from "./gradient";
import Container from "./container";
import { Button } from "./button";

export default function Footer() {
  return (
    <footer>
      <Gradient className="relative">

            <p className="font-mono text-xs/5 font-semibold uppercase tracking-widest text-gray-500">
              
            </p>
            <p className="mx-auto mt-6 text-3xl text-gray-950 sm:text-5xl tracking-tight font-medium">
              <br />
              
            </p>
            <p className="mx-auto mt-6 max-w-xs text-sm/6 text-gray-500">
              
            </p>
            <div className="mt-6">
              <Button className="w-full sm:w-auto" href="/login">
                
              </Button>
            </div>
          </div>
        </Container>
      </Gradient>
    </footer>
  );
}
