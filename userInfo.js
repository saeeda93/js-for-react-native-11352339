
function createUserProfiles(originalNames, modifiedNames) {
    return originalNames.map((name, index) => ({
      id: index + 1,
      originalName: name,
      modifiedName: modifiedNames[index]
    }));
  }
  
  const originalNames = ["Minji", "Hanni", "Danielle", "Haerin", "Hyein"];
  const modifiedNames = ["MINJI", "hanni", "DANIELLE", "haerin", "HYEIN"];
  console.log(createUserProfiles(originalNames, modifiedNames));
  