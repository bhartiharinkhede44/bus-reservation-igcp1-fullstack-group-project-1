import React, { useEffect, useState } from "react";
import Navbar from "./../../components/Navbar/Navbar";
import axios from "axios";
// import CustomerCard from "./../../components/card/card";
import ReviewTask from "./../../components/ReviewTask/ReviewTask";
// import showToast from "crunchy-toast";
import "./Reviews.css";
import Footer from "./../../components/Footer/Footer"

const Review = () => {
  const [taskList, setTaskList] = useState(['']);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [emoji, setEmoji] = useState("");

  const loadReview = async () => {
    if (!title || !description || !name || !profession || emoji) {
        alert("All fields are required")
        window.location.href = '/booknow'
        return
    }
    const searchData = {
       title,
       description,
       name,
       profession,
       emoji
    }
    const response = await axios.post('/api/book', searchData)
    alert(response?.data?.data)
    setTitle('')
    setDescription('')
    setName('')
    setProfession('')
    setEmoji('')
  }

    return (
      <>
        <div className="background-color">
          <Navbar />
          <h1 className="text-center">PASSENGER REVIEW</h1>
          <div className="container1">
            <div className="input-container mt-5 shadow">
              <form>
                <div className="first-input-grp">
                  <input
                    type="text"
                    value={title}
                    placeholder="Enter Review Title Here"
                    className="mt-5 px-3 input-box shadow"
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />

                  <input
                    type="text"
                    value={description}
                    placeholder="Enter Review Description Here"
                    className="mt-5 px-3 input-box shadow"
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />

                  <input
                    type="text"
                    value={name}
                    placeholder="Enter Name Here"
                    className="mt-5 px-3 input-box shadow"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>

                <div className="first-input-grp">
                  <input
                    type="text"
                    value={profession}
                    placeholder="Enter Profession Here"
                    className="mt-5 px-3 input-box shadow"
                    onChange={(e) => {
                      setProfession(e.target.value);
                    }}
                  />
                  <input
                    type="text"
                    value={emoji}
                    placeholder="Add Emoji Here"
                    className="mt-5 px-3 input-box shadow"
                    onChange={(e) => {
                      setEmoji(e.target.value);
                    }}
                  />
                  {/* {isEdit ?  */}
                  (
                    <button
                      type="button"
                      className="add-button mx-5 px-5 shadow"
                    // onClick={updateTask}
                    >
                      Update Review
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="review-btn"
                      onClick={loadReview}
                    >
                      Add Review
                    </button>
                  )
                </div>
              </form>
            </div>

            <div className="flex-container">
              {taskList.map((taskItem, index) => {
                const { id, title, description, name, profession, emoji } =taskItem;
                return (
                  <ReviewTask
                    key={id}
                    id={id}
                    title={title}
                    description={description}
                    name={name}
                    profession={profession}
                    emoji={emoji}
                     setTaskEditable={setTaskEditable} 
                  />
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
  export default Review;
