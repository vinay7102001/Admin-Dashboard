import { FormEvent, useState, useEffect } from "react";
import AdminSidebar from "../components/AdminSidebar";

const allLatters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const allNumbers = "1234567890";
const allSymbols = "~!@#$%^&*()_+";

const Coupon = () => {
  const [size, setSize] = useState<number>(8);
  const [prefix, setPrefix] = useState<string>("");
  const [includeNumber, setIncludeNumber] = useState<boolean>(false);
  const [includeCharacters, setIncludeCharacter] = useState<boolean>(false);
  const [includeSymbole, setIncludeSymbole] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const [coupon, setCoupon] = useState<string>("");

  const copyText = async (coupon: string) => {
    await window.navigator.clipboard.writeText(coupon);
    setIsCopied(true);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!includeNumber && !includeCharacters && !includeSymbole) {
      return alert("Please Select One At A Time");
    }

    let result: string = prefix || "";

    const loopLength: number = size - result.length;

    for (let i = 0; i < loopLength; i++) {
      let entireString: string = "";
      if (includeCharacters) entireString += allLatters;
      if (includeNumber) entireString += allNumbers;
      if (includeSymbole) entireString += allSymbols;

      const randomNumber: number = ~~(Math.random() * entireString.length);
      result += entireString[randomNumber];
    }

    setCoupon(result);
  };

  useEffect(() => {
    setIsCopied(false);
  }, [coupon]);
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="dashboardAppContainer">
        <h1>Coupon</h1>
        <section>
          <form className="coupon_form" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Text to include"
              value={prefix}
              onChange={(e) => {
                setPrefix(e.target.value);
              }}
              maxLength={size}
            />
            <input
              type="number"
              placeholder="Coupon length"
              value={size}
              onChange={(e) => {
                setSize(Number(e.target.value));
              }}
              min={8}
              max={25}
            />

            <fieldset>
              <legend>Include</legend>
              <input
                type="checkbox"
                checked={includeNumber}
                onChange={(e) => {
                  setIncludeNumber((pre) => !pre);
                }}
              />
              <span>Number</span>

              <input
                type="checkbox"
                checked={includeCharacters}
                onChange={(e) => {
                  setIncludeCharacter((pre) => !pre);
                }}
              />
              <span>Charaecters</span>

              <input
                type="checkbox"
                checked={includeSymbole}
                onChange={(e) => {
                  setIncludeSymbole((pre) => !pre);
                }}
              />
              <span>Symbole</span>
            </fieldset>
            <button type="submit">Generate</button>
          </form>

          {coupon && (
            <code>
              {coupon}{" "}
              <span onClick={() => copyText(coupon)}>
                {isCopied ? "Coppied" : "Copy"}
              </span>{" "}
            </code>
          )}
        </section>
      </main>
    </div>
  );
};

export default Coupon;
