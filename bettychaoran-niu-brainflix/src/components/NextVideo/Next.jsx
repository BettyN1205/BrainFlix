import '../NextVideo/next.scss';

const Next = ({ updateVideoDetails, noChose }) => {
  const handleClick = (id) => {
    updateVideoDetails(id);
  };

  return (
    <>
      <section className="next">
        <h2 className='next__title'>NEXT VIDEOS</h2>

        {noChose.map((item) => (
          <div className={`next__container next__container-${item.id}`} key={item.id} 
          onClick={() => handleClick(item.id)} 
          >
            <div className="next__img-container">
              <img className="next__img" src={item.image} alt={item.title} />
            </div>
            <div className="next__detail">
              <p className="next__detail-title">{item.title}</p>
              <p className="next__detail-text">{item.channel}</p>
            </div>
          </div>
        ))}

      </section>
    </>
  );
};

export default Next;

