function Details({ item, type, onBack }) {
  return (
    <div className="card m-4">
      <div className="card-body d-flex flex-column align-items-center">
        <button
          className="btn btn-outline-secondary m-2 col-7"
          onClick={onBack}
        >
          <i class="bi bi-caret-left"></i> Back to search results
        </button>

        {type === "repositories" ? (
          <>
            <div className="m-2">
              <h5 className="card-title">{item.full_name}</h5>
              <p className="card-text">
                {item.description || "Description not found"}
              </p>
              <p className="card-text">Owner: {item.owner.login}</p>
              <p className="card-text">Language: {item.language}</p>
              <p className="card-text">Stars: {item.stargazers_count}</p>
              <p className="card-text">Forks: {item.forks_count}</p>
              <p className="card-text">
                Updated: {new Date(item.updated_at).toLocaleDateString()}
              </p>
            </div>
            <a
              href={item.html_url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary m-2 col-7"
            >
              Open repository on GitHub <i class="bi bi-box-arrow-up-right"></i>
            </a>
          </>
        ) : (
          <>
            <h5 className="card-title mt-2">{item.login}</h5>
            <img
              src={item.avatar_url}
              alt="avatar"
              className="img-fluid m-2 col-4"
            />
            <a
              href={item.html_url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary m-2 col-7"
            >
              Open profile on GitHub <i class="bi bi-box-arrow-up-right"></i>
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export default Details;
