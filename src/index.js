import React from "react";
import ReactDOM from "react-dom";
import Image from "./Components/Image";
import Link from "./Components/Link";
import Footer from "./Components/Footer";
import arrow from "./Components/arrow.png"
function App() {
  return (
    <div className="App center">
        <a href="" className="center">
            <img src={arrow} alt="share" />
        </a>
      <Image />
      <div className="links center">
        <Link 
        id="twitter" 
        href="https//www.twitter.com/proff_official" 
        name="Twitter Link" />
        <Link
          id="btn__zuri"
          href="https//training.zuri.team/"
          name="Zuri Team"
        />
        <Link id="books" href="https//books.zuri.team" name="Zuri Books" />
        <Link
          id="book__python"
          href="https//books.zuri.team/phyrhon-for-beginners?ref_id=codextra"
          name="Python Books"
        />
        <Link
          id="pitch"
          href="https//backgrounds.zuri.team"
          name="Background Check for Coders"
        />
        <Link
          id="book__design"
          href="https//books.zuri.team/design-rules"
          name="Design Books"
        />
      </div>
      <Footer />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
