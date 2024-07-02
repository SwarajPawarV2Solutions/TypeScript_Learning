function display(id, name, role) {
    if (role === void 0) { role = "Normal"; }
    console.log("Id", id);
    console.log("Name", name);
    console.log("role", role);
}
display(1, "Swaraj");
display(1, "Swaraj", "Software Engineer");
