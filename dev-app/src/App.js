import React, { useState, useEffect } from "react";
import httpClient from "./api/httpClient";
import Spinner from './components/Spinner';
import Alert from './components/Alert'


const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const getAllUsers = async () => {
      try {
        const { data } = await httpClient.get("/users");
        setUsers(data);
      } catch ({ message }) {
        setError(message);
      } finally {
        setLoading(false);
      }
    }
    getAllUsers();
  }, []);
  

  useEffect(() => {
    setLoading(true);
    setError(null);
    const getAllAttractions = async () => {
      try {
        const { data } = await httpClient.get("/attractions");
        setUsers(data);
      } catch ({ message }) {
        setError(message);
      } finally {
        setLoading(false);
      }
    };
    getAllAttractions();
  }, []);


  if (loading) return <Spinner color="primary"/>
  if (error) return <Alert title="Network Error" body={error} color="danger" />
  
  const renderUsrs = users ? users : null;
  

  return (
    <>
      <div className="container">
        <div className="row">{renderUsrs.length}</div>
      </div>
    </>
  );
};

export default App;
