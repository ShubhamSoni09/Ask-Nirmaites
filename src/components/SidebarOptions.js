import { Add } from "@material-ui/icons";
import React from "react";
import "./SidebarOption.css";

function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <img
          src="https://nirmauni.ac.in/wp-content/uploads/2019/08/167207_2-1024x683.jpg"
          alt=""
        />
        <p>Know your Campus</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://blog.prepscholar.com/hubfs/feature_choice.jpg"
          alt=""
        />

        <p>Elective Doubts</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://peterpilt.files.wordpress.com/2012/02/advice.jpg"
          alt=""
        />
        <p>Piece of advice</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://exambazaar-2020.s3.amazonaws.com/7840163a82fdf16df256e63fdcbdff21.JPG"
          alt=""
        />
        <p>College Fests</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://spiderimg.amarujala.com/assets/images/2016/03/05/scholarship_1457180385.jpeg"
          alt=""
        />
        <p>Further Studies</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://www.your-space.in/wp-content/uploads/property/kharghar-nmims-hostel-33/2.jpg"
          alt=""
        />
        <p>Hostel/PG Doubts</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://i.guim.co.uk/img/media/a1b7129c950433c9919f5670c92ef83aa1c682d9/55_344_1971_1183/master/1971.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=88ba2531f114b9b58b9cb2d8e723abe1"
          alt=""
        />
        <p>Memes & Fun</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=590&h=800&D80F3D79-4382-49FA-BE4B4D0C62A5C3ED"
          alt=""
        />
        <p>BookWorms</p>
      </div>

      <div className="sidebarOption">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <p>Programming & Tech</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://3.files.edl.io/3f22/20/08/18/224435-ac5f0b2e-7b92-4064-9c28-462ab8826e64.jpg"
          alt=""
        />
        <p>Clubs</p>
      </div>
      <div className="sidebarOption">
        <Add />
        <p className="text">Discover Spaces</p>
      </div>
    </div>
  );
}

export default SidebarOptions;
