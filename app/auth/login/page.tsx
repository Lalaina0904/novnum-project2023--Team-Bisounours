export default function Auth() {
  return (
    <main>
      <form action="">
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>

        <div>
          <button type="submit">LoginD</button>
        </div>
      </form>
    </main>
  );
}
