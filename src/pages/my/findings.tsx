import React, { useEffect, useState } from "react";

import ProtectedPage from "../../components/ProtectedPage";

export default function FindingsPage({ data, location }) {
  const params = new URLSearchParams(location.search);
  console.log(`Query param contest: ${params.get("contest")}`);
  console.log(`Link state contest: ${location.state?.contestId}`);

  const [findingsList, setFindingsList] = useState([]);
  useEffect(() => {
    fetch(`/.netlify/functions/edit-finding`)
      .then((response) => response.json())
      .then((resultData) => {
        setFindingsList(resultData);
      });
  }, []);
  
  console.log(findingsList);

  return (
    <ProtectedPage
      pageTitle="View Findings"
      message="You need to be a registered warden, currently connected via wallet, to view findings."
    >
      <div className="wrapper-main">
        <h1 className="page-header">View Findings</h1>
        {/* Teh findings */}
        <p>{JSON.stringify(findingsList)}</p>
      </div>
    </ProtectedPage>
  );
}
