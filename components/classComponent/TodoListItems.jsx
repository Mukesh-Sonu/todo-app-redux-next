"use client";
import { useDispatch } from "react-redux";
import { toggleChecked, deleteTodo } from "../../redux/todoSlice";
import { useSelector } from "react-redux";
import List from "../List";
import React from "react";

const GetDispatchFunction = ({ render }) => {
  const list = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleDelete = (deleteItem) => {
    dispatch(
      deleteTodo({
        id: deleteItem.id,
      })
    );
  };

  const handleChecked = (checkedId) => {
    dispatch(
      toggleChecked({
        id: checkedId,
      })
    );
  };

  return render(list, handleChecked, handleDelete);
};

export default class TodoListItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
    };
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }

  handleEdit = (editItem) => this.props.setText(editItem);

  render() {
    const { filteredList, pending } = this.props;

    return (
      <GetDispatchFunction
        render={(list, handleChecked, handleDelete) => {
          return (
            <>
              {this.state.mounted && (
                <>
                  {!pending.length && <h2>{pending} task remaining</h2>}
                  <div className="todo-list-items">
                    {!list.length ? (
                      <h3 className="zero-state">Add your first Todo</h3>
                    ) : (
                      <>
                        <ul>
                          {filteredList.map((item, index) => (
                            <List
                              key={index}
                              item={item}
                              handleChecked={handleChecked}
                              handleEdit={this.handleEdit}
                              handleDelete={handleDelete}
                            />
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </>
              )}
            </>
          );
        }}
      />
    );
  }
}
