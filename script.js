// =====================================================
// TIPJAR PRO v2.0
// GITHUB DISPLAY SCRIPT
// =====================================================

const params = new URLSearchParams(window.location.search);

// -----------------------------------------------------
// DEFAULT VALUES
// -----------------------------------------------------

let state =
    params.get("state") || "";

let role =
    params.get("role") || "AVAILABLE";

let name =
    params.get("name") || "CLICK TO LOGIN";

let tips =
    params.get("tips") || "0";

let photo =
    params.get("photo") || "";

let status =
    params.get("status") || "OFFLINE";

// -----------------------------------------------------
// AVAILABLE MODE
// -----------------------------------------------------

if(state === "available")
{
    role = "AVAILABLE";
    name = "CLICK TO LOGIN";
    tips = "0";
    status = "OFFLINE";
    photo = "";
}

// -----------------------------------------------------
// UPDATE ROLE
// -----------------------------------------------------

const roleElement =
    document.getElementById("role");

if(roleElement)
{
    roleElement.textContent = role;
}

// -----------------------------------------------------
// UPDATE NAME
// -----------------------------------------------------

const nameElement =
    document.getElementById("name");

if(nameElement)
{
    nameElement.textContent = name;
}

// -----------------------------------------------------
// UPDATE TIPS
// -----------------------------------------------------

const tipsElement =
    document.getElementById("tips");

if(tipsElement)
{
    tipsElement.textContent =
        "L$ " + tips;
}

// -----------------------------------------------------
// UPDATE STATUS
// -----------------------------------------------------

const statusElement =
    document.getElementById("status");

if(statusElement)
{
    statusElement.textContent =
        status;
}

// -----------------------------------------------------
// UPDATE PROFILE PHOTO
// -----------------------------------------------------

const photoElement =
    document.getElementById("profilePic");

if(photoElement)
{
    if(photo !== "")
    {
        photoElement.src = photo;
    }
    else
    {
        photoElement.style.display = "none";
    }
}

// -----------------------------------------------------
// PAGE TITLE
// -----------------------------------------------------

document.title =
    role +
    " - " +
    name +
    " - L$" +
    tips;

// -----------------------------------------------------
// DEBUG (optional)
// -----------------------------------------------------

console.log("TIPJAR DATA");
console.log("State:", state);
console.log("Role:", role);
console.log("Name:", name);
console.log("Tips:", tips);
console.log("Status:", status);
console.log("Photo:", photo);
