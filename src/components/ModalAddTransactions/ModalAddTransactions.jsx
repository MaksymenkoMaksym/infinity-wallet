const ModalAddTransactions = () => {
  return (
    <div>
      <h1>Add transaction</h1>
      <form action="submit">
        <div role="group" aria-labelledby="my-radio-group">
          <label>
            <select name="category">
              <option value="">--Please choose an option--</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="hamster">Hamster</option>
              <option value="parrot">Parrot</option>
              <option value="spider">Spider</option>
              <option value="goldfish">Goldfish</option>
            </select>
          </label>
          <label>
            <input type="radio" name="picked" value="One" />
            Income
          </label>
          <label>
            <input type="radio" name="picked" value="Two" />
            Expense
          </label>
        </div>
        <label>
          <input type="text" name="picked" placeholder="0.00" />
        </label>
        <label>
          <input type="date" />
        </label>
        <label>
          <p>Comment</p>
          <input type="text" name="picked" value="x" />
        </label>
        <button type="submit">Accept</button>
        <button type="submit">Cancel</button>
      </form>
    </div>
  );
};

export default ModalAddTransactions;
