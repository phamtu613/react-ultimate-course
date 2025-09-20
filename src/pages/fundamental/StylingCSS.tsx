

/*
- external css: <link src="../style.css" />
- internal css: write in head html <style></style>
- inline css: write css direct html tag <div style="..."></div>

Độ ưu tiên: inline > internal > external
id? class? presudo class? presudo selector??

select field
- click on site
- click item
- up/down
- select one item
- select multiple item
- custom item
- loading
- add item in select 
- infinite scroll
*/
function StylingCSS() {
  const active = true;
  return (
    <div>
      <h1 
        className={`
          heading 
          ${active ? 'active' : ''}
        `}
      >StylingCSS
      </h1>
    </div>
  )
}

export default StylingCSS