export default function SectionContainer({children}) {
    return (
      <div className = "container">
          <div className = "mb-3">
            <div className = "card h-100">
              <div className="card-body">
                {children}
              </div>
            </div>
          </div>
      </div>
    );
  }