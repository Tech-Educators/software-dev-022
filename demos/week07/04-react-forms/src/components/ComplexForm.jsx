export default function ComplexForm() {
    return (
        <form>
            <input name='userName' onChange={handleChange}  />
            <input name='password' onChange={handleChange}  />
            <input name='location' onChange={handleChange}  />
            <input name='age' onChange={handleChange}  />
            <input name='creditcard' onChange={handleChange} />
            <input name='mothers_birthday' onChange={handleChange} />
            <input name='bank' onChange={handleChange} />
            <input name='pet_name' onChange={handleChange}  />
            <button type="submit">submit</button>
        </form>
    )
}