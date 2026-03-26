// 1. Normalize Units
function normalizeUnits(manifest) {
  // create a copy (no mutation)
  const newManifest = { ...manifest };

  if (newManifest.unit === "lb") {
    newManifest.weight = Number((newManifest.weight * 0.45).toFixed(2));
    newManifest.unit = "kg";
  }

  return newManifest;
}


// 2. Validate Manifest
function validateManifest(manifest) {
  const result = {};

  // containerId
  if (!("containerId" in manifest)) {
    result.containerId = "Missing";
  } else if (
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0
  ) {
    result.containerId = "Invalid";
  }

  // destination
  if (!("destination" in manifest)) {
    result.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    result.destination = "Invalid";
  }

  // weight
  if (!("weight" in manifest)) {
    result.weight = "Missing";
  } else if (
    typeof manifest.weight !== "number" ||
    manifest.weight <= 0 ||
    Number.isNaN(manifest.weight)
  ) {
    result.weight = "Invalid";
  }

  // unit
  if (!("unit" in manifest)) {
    result.unit = "Missing";
  } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
    result.unit = "Invalid";
  }

  // hazmat
  if (!("hazmat" in manifest)) {
    result.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    result.hazmat = "Invalid";
  }

  return result;
}


// 3. Process Manifest
function processManifest(manifest) {
  const validation = validateManifest(manifest);

  // valid case
  if (Object.keys(validation).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);

    const normalized = normalizeUnits(manifest);
    console.log(`Total weight: ${normalized.weight} kg`);
  } 
  // invalid case
  else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validation);
  }
}