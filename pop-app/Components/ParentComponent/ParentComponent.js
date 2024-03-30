'use client';

import React, { useState, useEffect } from "react";
import "./ParentComponent.css";
import ChildComponent from "../ChildComponent/ChildComponent";

export default function ParentComponent() {
  return (
    <div className="demo_wrapper">
      <div className="demo_wrapper__container">
        <ChildComponent Text={'Test'}/>

      </div>
    </div>
  );
}