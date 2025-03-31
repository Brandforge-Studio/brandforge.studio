export default function Contact() {
  return (
    <>
      <form>
      <label>Name</label>
      <input type="text"></input>
      <label>Company Name</label>
      <input type="text"></input>
      <label>Email</label>
      <input type="email"></input>
      <label>Phone</label>
      <input type="tel"></input>
      <label>Project Description</label>
      <textarea name="projectDescription" rows="7" cols="10"></textarea>
      <div>
        <button>
          $5K-25K
        </button>
        <button>
          $25K-50K
        </button>
        <button>
          $50K-100K
        </button>
        <button>
          $100K+
        </button>
      </div>
      <button type="submit">Submit</button>
      </form>
    </>
  )
}
