/**
 * Retrieves ids from a list of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @author Segni Assaye <https://github.com/Segniko>
 * @returns
 */
const getListStudentIds = (listStudents) => {
  let listStudentIds = [];
  if (!(listStudents instanceof Array)) {
    return listStudentIds;
  }
  listStudentIds = listStudents.map((student) => student.id);
  return listStudentIds;
};

export default getListStudentIds;
