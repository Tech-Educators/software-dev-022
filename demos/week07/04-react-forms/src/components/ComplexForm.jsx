import { useState } from "react";
export default function ComplexForm() {
  const [formData, setFormData] = useState({});

  console.log(`Form data is:`, formData);
  // {inputName: inputvalue}

  function handleChange(e) {

    const inputName = e.target.name;
    setFormData({
        // spread just copies the previous value of formData into the new formData
        ...formData,
        [inputName]: e.target.value 
    });
    // I'm just making a new object everytime - we're not copying over the previous value of our formData
    // setFormData({[inputName]: e.target.value})
  }
  return (
    <form>
      <input name="userName" onChange={handleChange} />
      <input name="password" onChange={handleChange} type='password'/>
      <input name="location" onChange={handleChange} />
      <input name="age" onChange={handleChange} />
      <input name="creditcard" onChange={handleChange} />
      <input name="mothers_birthday" onChange={handleChange} />
      <input name="bank" onChange={handleChange} />
      <input name="pet_name" onChange={handleChange} />
      <input name='foo' onChange={handleChange} />
      <button type="submit">submit</button>
    </form>
  );
}
