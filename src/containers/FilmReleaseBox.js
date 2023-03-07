import React, {useState} from "react";
import FilmList from "../components/FilmList";
import UpcomingReleases from "../components/UpcomingReleases";

const FilmReleaseBox = ()=>{
    return (
        <>
        <h1>Films</h1>
        <FilmList/>
        <UpcomingReleases/>
        </>
    );
};

export default FilmReleaseBox