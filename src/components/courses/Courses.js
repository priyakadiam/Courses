import React from "react";
import "./Courses.css";

const someList = [
  {
    id: 1,
    title: "React",
    url: "",
  },
  {},
];

const courseNames = [
  {
    id: 1,
    title: "React",
    url: "",
  },
  {
    id: 2,
    title: "Angular",
    url: "",
  },
  {
    id: 3,
    title: "Python",
    url: "",
  },
  {
    id: 4,
    title: "Selenium with Python",
    url: "",
  },
  {
    id: 5,
    title: "Java",
    url: "",
  },
  {
    id: 6,
    title: "Selenium with Java",
    url: "",
  },
  {
    id: 7,
    title: "SDET",
    url: "",
  },
  {
    id: 8,
    title: "SQL Concepts",
    url: "",
  },
  {
    id: 9,
    title: "Data Science",
    url: "",
  },
  {
    id: 10,
    title: "API Testing",
    url: "",
  },
  {
    id: 11,
    title: "Manual Testing",
    url: "",
  },
];

function Course() {
  return (
    <div className="container mt-5">
      <h1 className="courses-heading">COURSES</h1>
      <hr className="heading-underline" />
      <div className="row">
        {courseNames.map((course) => (
          <div key={course.id} className="col-sm-12 col-md-6 col-lg-3 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">Some description here...</p>
                <a href={course.url} className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Course;
