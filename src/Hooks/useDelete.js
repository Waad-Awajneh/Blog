import React, { useEffect, useState } from "react";

export default function useDelete(url) {
  const [deleteSuccessfully, setDeleteSuccessfully] = useState(false);

  useEffect(() => {
    deleteData();
  }, []);

  const deleteData = async () => {
    try {
      await fetch(url, { method: "DELETE" });

      setDeleteSuccessfully(true);
    } catch (error) {
      setDeleteSuccessfully(false);
    }
  };

  return { deleteSuccessfully };
}
