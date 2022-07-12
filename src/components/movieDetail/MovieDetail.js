import React, { useEffect } from "react";
import noImage from "../../utils/no-image-available.png";
import { useDispatch } from "react-redux";
import { getDetails } from "../../utils/contentManagement";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "./MovieDetail.css";

const MovieDetail = () => {
  const dispatch = useDispatch();
  const selectedMov = useSelector((state) => state.movie.selected);
  let navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetails(id));
  }, []);

  return (
    <div className="detail-container">
      <div
        onClick={() => navigate(-1)}
        style={{
          border: "1px solid white",
          borderRadius: "8px",
          cursor: "pointer",
          height: "fit-content",
          padding: "3px",
          margin: "0px 6px 0 4px",
        }}
      >
        back button
      </div>
      <div className="poster">
        {selectedMov.Poster === "N/A" ? (
          <img src={noImage} alt={selectedMov.Title} />
        ) : (
          <img src={selectedMov.Poster} alt={selectedMov.Title} />
        )}
      </div>
      <div className="info">
        <div className="field">
          <div className="label">
            <p className="title label-p">{selectedMov.Title}</p>
          </div>
        </div>
        <div className="field">
          <div className="label">
            <p className="label-p">{selectedMov.Plot}</p>
          </div>
        </div>
        <div className="field">
          <div className="label">
            Released: <p className="label-p">{selectedMov.Released}</p>
          </div>
        </div>
        <div className="field">
          <div className="label">
            Runtime: <p className="label-p">{selectedMov.Runtime}</p>
          </div>
        </div>
        <div className="field">
          <div className="label">
            Genre: <p className="label-p">{selectedMov.Genre}</p>
          </div>
        </div>
        <div className="field">
          <div className="label">
            IMDB Rating: <p className="label-p">{selectedMov.imdbRating}</p>
          </div>
        </div>
        <div className="field">
          <div className="label">
            Director(s): <p className="label-p">{selectedMov.Director}</p>
          </div>
        </div>
        <div className="field">
          <div className="label">
            Writer(s): <p className="label-p">{selectedMov.Writer}</p>
          </div>
        </div>
        <div className="field">
          <div className="label">
            Language(s): <p className="label-p">{selectedMov.Language}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
