
function addItem() {
    let newItem = document.getElementById('itemInput').value;

    if (newItem.trim() !== '') {
        let li = document.createElement('li');
        li.textContent = newItem;

        let editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', function () {
            editItem(li);
        });

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function () {
            deleteItem(li);
        });

        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        document.getElementById('shoppingList').appendChild(li);

        document.getElementById('itemInput').value = '';
    }
}

function editItem(li) {
    document.getElementById('itemInput').value = li.textContent ;

    li.remove();
}

function deleteItem(li) {
    li.remove();
}

document.getElementById('addItemBtn').addEventListener('click', addItem);
