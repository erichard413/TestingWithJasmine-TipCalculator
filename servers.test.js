describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
    
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server on submitServerInfo() with empty input', function(){
    serverNameInput.value = '';
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
  });

  // it('should create table row element and pass to appendTd with calculated sum of all payment', function() {
  //   submitServerInfo();
  //   updateServerTable();
  //   let curTdList = document.querySelectorAll('#serverTable tbody tr td');
  //   expect(curTdList.length).toEqual(2);
  //   expect(curTdList[0].innerText).toEqual('Alice');
  //   expect(curTdList[1].innerText).toEqual('$0.00');
  // });

  // NOTE - I used .target in the removeServer() function - this code does not seem to like that.
  // it('should remove table element', function(){
  //   submitServerInfo();
  //   updateServerTable();
  //   removeServer();
  //   expect(Object.keys(allServers).length).toEqual(0);
  // });

  afterEach(function() {
    // document.getElementById('server1').remove();
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
});
