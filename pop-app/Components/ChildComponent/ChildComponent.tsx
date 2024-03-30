'use client';

import React, { useState, useEffect } from "react";
import "./ChildComponent.css";

interface ChildComponentProps {
  Text: string;
}

const ChildComponent: React.FC<ChildComponentProps> = (props) => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    
  }, []);

  return (
    <div className="child_wrapper">
        {props.Text}
    </div>
  );
}

export default ChildComponent;