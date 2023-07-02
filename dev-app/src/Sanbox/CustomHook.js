import React from "react";
import Spinner from "../components/Spinner";
import Alert from "../components/Alert";
import useFetchData from "../hooks/useFetchData";
import Badge from "../components/Spinner/Badge";

const CustomHook = () => {
  const {
    loading: userLoading,
    error: userError,
    data: userData,
  } = useFetchData("/users");
  const {
    loading: attractionsLoading,
    error: attractionsError,
    data: attractionsData,
  } = useFetchData("/attractions");

  //if (loading) return <Spinner color="primary"/>
  if (userError)
    return <Alert title="Network Error" body={userError} color="danger" />;

  if (attractionsError)
    return (
      <Alert title="Network Error" body={attractionsError} color="danger" />
    );

  const renderUserData = userData ? userData : null;
  const renderAttractionsData = attractionsData ? attractionsData : null;

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-1">Users</div>
          <div className="col-md-1">
            {userLoading ? (
              <Spinner color="danger" />
            ) : (
              <Badge color="primary" shape="rounded-pill">
                {renderUserData.length}
              </Badge>
            )}
          </div>
          <div className="col-md-1">Attractions</div>
          <div className="col-md-1">
            {attractionsLoading ? (
              <Spinner color="danger" />
            ) : (
              <Badge color="primary" shape="rounded-pill">
                {renderAttractionsData.length}
              </Badge>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomHook;
