import React, { useEffect, useState } from "react";
import Navbar from "./../../components/Navbar/Navbar";
import CustomerCard from "./../../components/card/card";
import ReviewTask from "./../../components/ReviewTask/ReviewTask";
// import showToast from "crunchy-toast";
import "./Reviews.css";
import Footer from "./../../components/Footer/Footer"

const Review = () => {
  const [taskList, setTaskList] = useState([
  ]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [emoji, setEmoji] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [idToEdit, setIdToEdit] = useState(0);

  // Load data from localStorage on initial render
  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("reviewlist"));
    if (list && list.length > 0) {
      setTaskList(list);
    }
  }, []);

  // Save data to localStorage
  const saveListToLocalStorage = (taskList) => {
    localStorage.setItem("reviewlist", JSON.stringify(taskList));
  };

  // Add a new review
  const addReviewToList = () => {
    if (!title || !description || !name || !profession || !emoji) {
      alert("All fields are required.");
      return;
    }

    const randomId = Math.floor(Math.random() * 1000);

    const newTaskList = [
      ...taskList,
      {
        id: randomId,
        title: title,
        description: description,
        name: name,
        profession: profession,
        emoji: emoji,
      },
    ];

    setTaskList(newTaskList);
    saveListToLocalStorage(newTaskList);

    alert("Review added successfully!");

    // Clear input fields
    setTitle("");
    setDescription("");
    setName("");
    setProfession("");
    setEmoji("");
  };

  // Set a review as editable
  const setTaskEditable = (id) => {
    setIsEdit(true);
    setIdToEdit(id);
    const taskToEdit = taskList.find((task) => task.id === id);
    setTitle(taskToEdit.title);
    setDescription(taskToEdit.description);
    setName(taskToEdit.name);
    setProfession(taskToEdit.profession);
    setEmoji(taskToEdit.emoji);
  };

  // Update an existing review
  const updateTask = () => {
    const updatedTaskList = taskList.map((task) =>
      task.id === idToEdit
        ? {
            id: idToEdit,
            title: title,
            description: description,
            name: name,
            profession: profession,
            emoji: emoji,
          }
        : task
    );

    setTaskList(updatedTaskList);
    saveListToLocalStorage(updatedTaskList);

    setIsEdit(false);
    setIdToEdit(0);
 alert ("Review updated successfully!")
    // showToast("Review updated successfully!", "success", 3000);
  };

  return (
    <>
     <div className="background-color">
      <Navbar />
     
      <h1 className="text-center">PASSENGER REVIEW</h1>
      {/* <CustomerCard /> */}

      <div className="container1">
        {/* <h1 className="text-center title-main">PASSENGER EXPERIENCES</h1> */}

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
              {isEdit ? (
                <button
                  type="button"
                  className="add-button mx-5 px-5 shadow"
                  onClick={updateTask}
                >
                  Update Review
                </button>
              ) : (
                <button
                  type="button"
                  className="review-btn"
                  onClick={addReviewToList}
                >
                  Add Review
                </button>
              )}
            </div>
          </form>
        </div>

        <div  className="flex-container">
          {taskList.map((taskItem, index) => {
            const { id, title, description, name, profession, emoji } =
              taskItem;

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
  );
};

export default Review;
