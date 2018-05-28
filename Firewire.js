//////////// GLOBALS ////////////
users = {};
transfers = {};
owner = msg.sender; // init owner as contract creator

//////////// OWNER ONLY FUNCTIONS ////////////
function issue_eth(topl_address, eth_address, amount) {
    // check that msg.sender is owner
    // create ether assets
    // send ether assets
}

function approve_transfer(topl_address, eth_address, amount) {
    if (msg.sender != owner) { // owner check
        throw "NOT OWNER"
    }
    if (transfers.topl_address.eth_adrs === eth_address && transfers.topl_address.balance === amount) {
        transfers.topl_address.balance = 0; // reset transfer obj
        transfers.topl_address.active = false;
        // broadcast accepted transfer
    }
    // this is called if and only if
    // owner checks that eth_address is a user on the ethereum sidechaining contract
    // then owner checks that that user's listed topl address is the same as the transfer requester's
    // then owner checks that amount is <= to that user's ether balance

}


//////////// PUBLIC FUNCTIONS ////////////
function start_transfer(eth_address, amount) {
    topl_address = msg.sender; // not how this works. just go with it.
    if (transfers.topl_address.active === true) {
        throw "TRANSFER ALREADY IN PROGRESS"
    } else {
        transfers.topl_address = {"eth_adrs": eth_address, "balance": amount, "active": true};
    }
    // broadcast event containing topl_address, eth_address, and amount
}


//////////// HELPER FUNCTIONS ////////////
function safeAdd(a, b) {
    c = a + b;
    if (c < a || c < b) {
        throw "OVER/UNDERFLOW ERROR";
    } else {
        return c;
    }
}

function safeSub(a, b) {
    c = a - b;
    if (c > a) {
        throw "OVER/UNDERFLOW ERROR";
    } else {
        return c;
    }
}

function safeMul(a, b) {
    c = a * b;
    if (a === 0) {
        return 0;
    }
    if (c / a !== b) {
        throw "OVER/UNDERFLOW ERROR";
    } else {
        return c;
    }
}

function safeDiv(a, b) {
    c = a / b;
    if (b === 0) {
        throw "OVER/UNDERFLOW ERROR";
    } else {
        return c;
    }
}


//////////// EVENTS ////////////

