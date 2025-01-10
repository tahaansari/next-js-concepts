const AddBlog = () => {
  const submitForm = async (data) => {
    "use server";

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 5000);
    });

    console.log("submit form called " + data.get("title") + data.get("description"));
  };
  return (
    <>
      <div>
        <h1>Add blog form</h1>
        <form action={submitForm}>
          <input name="title" type="text" placeholder="enter title" />
          <br />
          <br />
          <textarea name="description" id="" placeholder="enter description"></textarea>
          <br />
          <br />
          <button type="hello">submit</button>
        </form>
      </div>
    </>
  );
};

export default AddBlog;
