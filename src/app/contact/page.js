export default function Contact() {
  return (
    <>
      <form>
       <div> 
        <label for="userName">Name</label>
        <input type="text" name="userName" placeholder="John Doe"/>
        <label for="companyName">Company Name</label>
        <input type="text" name="companyName" placeholder="Brandforge"/>
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" name="email" placeholder="johndoe@company.mail"/>
        <label for="phoneNumber">Phone</label>
        <input type="tel" name="phoneNumber" placeholder="5-(555)-555-5555"/>
      </div>
      <label for="projectDescription">Project Description</label>
      <textarea name="projectDescription" rows="4" cols="50" placeholder="I want to make a simple website for my company that will help me grow my business."></textarea>
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
      <div>
        <button type="submit">Submit</button>
      </div>
      </form>
    </>
  )
}
