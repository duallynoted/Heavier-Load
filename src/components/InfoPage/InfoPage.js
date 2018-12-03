import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const InfoPage = () => (
  <div>
    <h1>Heavier Load</h1>
    <h3>What it Is</h3>
    <p>
      Heavier Load allows users to easily track weights used for a workout or series of workouts.
      Users can also enter body measurements to track progress.
      This application removes the hassle of keeping up with tracking sheets or pen and paper, while also being kinder on the environment.
      The idea is to create workout "days"--like "Mondays," "Leg Day," "Phase One: Week 3, Day 5", etc.-- and then add exercises to those days.
    </p>

    <h3>How it Works</h3>
    <p>
      Create a username and password. Once logged in, go to the 'Create Exercise' page.
      1.) Create a Workout Day. Ex: "Chest Day".
      2.) Add an exercise to that day with a title, starting weight, and rep scheme. Ex: "Incline Press", 35 lbs, 3x10.
      3.) Once all your exercises are added, you can go to the 'Your Exercises' page, tap or click on the dropdown box and
      choose the day on which you're working.
      4.) Repeat everyday. Get fit.
    </p>
  </div>
);

export default InfoPage;
