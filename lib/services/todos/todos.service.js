"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TodosService {
    constructor() {
        this.Todo = [];
    }
    get() {
        try {
            return this.Todo;
        }
        catch (error) {
            throw error;
        }
    }
    save(text) {
        try {
            const newTodo = {
                id: this.Todo.length + 1,
                text,
                completed: false,
            };
            this.Todo.push(newTodo);
            return this.Todo;
        }
        catch (error) {
            console.error("Error retrieving prices:", error);
            throw error;
        }
    }
    update(todo) {
        try {
            const { id, text, completed } = todo;
            const todoIndex = this.Todo.findIndex((todo) => todo.id === id);
            if (todoIndex === -1)
                throw "Todo not found";
            this.Todo[todoIndex] = { ...this.Todo[todoIndex], text, completed };
            return this.Todo[todoIndex];
        }
        catch (error) {
            throw error;
        }
    }
}
exports.TodosService = TodosService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlcy90b2Rvcy90b2Rvcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsTUFBYSxZQUFZO0lBR3ZCO1FBRlEsU0FBSSxHQUFZLEVBQUUsQ0FBQztJQUVaLENBQUM7SUFFaEIsR0FBRztRQUNELElBQUk7WUFDRixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDbEI7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE1BQU0sS0FBSyxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBRUQsSUFBSSxDQUFDLElBQVk7UUFDZixJQUFJO1lBQ0YsTUFBTSxPQUFPLEdBQVU7Z0JBQ3JCLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUN4QixJQUFJO2dCQUNKLFNBQVMsRUFBRSxLQUFLO2FBQ2pCLENBQUM7WUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN4QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUE7U0FDakI7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsMEJBQTBCLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDakQsTUFBTSxLQUFLLENBQUM7U0FDYjtJQUNILENBQUM7SUFFRCxNQUFNLENBQUMsSUFBVztRQUNoQixJQUFJO1lBQ0YsTUFBTSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBQ3JDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBRWhFLElBQUksU0FBUyxLQUFLLENBQUMsQ0FBQztnQkFBRSxNQUFNLGdCQUFnQixDQUFDO1lBRTdDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDO1lBRXBFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM3QjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsTUFBTSxLQUFLLENBQUM7U0FDYjtJQUNILENBQUM7Q0FFRjtBQTNDRCxvQ0EyQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJVG9kbyB9IGZyb20gXCJzcmMvaW50ZXJmYWNlL3RvZG9zLmludGVyZmFjZVwiO1xuXG5leHBvcnQgY2xhc3MgVG9kb3NTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBUb2RvOiBJVG9kb1tdID0gW107XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGdldCgpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHRoaXMuVG9kbztcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgc2F2ZSh0ZXh0OiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgbmV3VG9kbzogSVRvZG8gPSB7XG4gICAgICAgIGlkOiB0aGlzLlRvZG8ubGVuZ3RoICsgMSxcbiAgICAgICAgdGV4dCxcbiAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgIH07XG4gICAgICB0aGlzLlRvZG8ucHVzaChuZXdUb2RvKTtcbiAgICAgIHJldHVybiB0aGlzLlRvZG9cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHJldHJpZXZpbmcgcHJpY2VzOlwiLCBlcnJvcik7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cblxuICB1cGRhdGUodG9kbzogSVRvZG8pIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBpZCwgdGV4dCwgY29tcGxldGVkIH0gPSB0b2RvO1xuICAgICAgY29uc3QgdG9kb0luZGV4ID0gdGhpcy5Ub2RvLmZpbmRJbmRleCgodG9kbykgPT4gdG9kby5pZCA9PT0gaWQpO1xuXG4gICAgICBpZiAodG9kb0luZGV4ID09PSAtMSkgdGhyb3cgXCJUb2RvIG5vdCBmb3VuZFwiO1xuXG4gICAgICB0aGlzLlRvZG9bdG9kb0luZGV4XSA9IHsgLi4udGhpcy5Ub2RvW3RvZG9JbmRleF0sIHRleHQsIGNvbXBsZXRlZCB9O1xuXG4gICAgICByZXR1cm4gdGhpcy5Ub2RvW3RvZG9JbmRleF07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=