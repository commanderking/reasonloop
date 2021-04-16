export const submitProposal = ({ projectId, activity, addedIcons }) => {
  const solution = {
    projectId,
    solution: addedIcons,
    activity: activity,
  };

  // TODO: This is placeholder for real submit behavior (leveraging local storage)
  if (window) {
    window.localStorage.setItem(
      "solutions",
      JSON.stringify([
        ...(JSON.parse(window.localStorage.getItem("solutions")) || []),
        solution,
      ])
    );
    location.reload();
  }
};
