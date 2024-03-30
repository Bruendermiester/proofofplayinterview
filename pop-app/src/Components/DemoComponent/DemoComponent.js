import React, { useState } from "react";
import "./DemoComponent.css";

export default function DemoComponent() {
  return (
    <div className="demo_wrapper">
      <div className="demo_wrapper__container">
        test

      </div>
    </div>
  );
}

export const config = { runtime: 'client' };