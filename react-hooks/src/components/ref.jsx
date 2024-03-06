import { useEffect, useRef, useState } from "react";

export const ComponentRef = () => {
  const nameRef = useRef();
  const passRef = useRef();
  const [show, setShow] = useState(false);

  const onSubmit = () => {
    const data = {
      name: nameRef.current.value,
      password: passRef.current.value,
    };
    console.log(data);
  };

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={nameRef} />
      <input type={show == false ? "password" : "text"} ref={passRef} />
      <button onClick={() => setShow(!show)}>
        {show == false ? "Show" : "Hide"}
      </button>
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};
