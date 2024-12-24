/*
What is the Big O notation for Function findStudentById . Explain your reason.
Answer:
O(n) เนื่องจากเป็นการใช้อัลกอริทึม Linear Search มีการใช้ for loop ที่จะเช็คข้อมูลทีละตัว รอบการทำงานจึงเพิ่มตามขนาดของข้อมูล

*/

/* 
What is the Big O notation for Function findProductPrice. Explain your reason.
Answer:
O(log n) เนื่องจากเป็นการใช้อัลกอรึทึม Binary Search มีการใช้ while loop โดยมีตัวแปร left และ right ที่เปลี่ยนแปลงค่าตามข้อมูลที่พบในแต่ละรอบทำให้ไม่ต้องค้นหาข้อมูลทั้งหมดทีละตัว

*/

/* 
Which function is more efficient and why?
Answer:
ขออนุญาติตอบโดยมีเงื่อนไขดังนี้

ถ้าข้อมูลมีการจัดเรียงลำดับมาแล้ว Function findProductPrice มีประสิทธิภาพมากกว่า เนื่องจาก Big O notation คือ O(log n) ทำให้ใช้รอบการทำงานน้อยกว่า

แต่ถ้าข้อมูลไม่มีการเรียงลำดับ function findStudentById มีประสิทธิภาพมากกว่า ถึงแม้จะใช้รอบการทำงานที่สูงกว่าแต่มีการค้นหาข้อมูลโดยเช็คข้อมูลทุกตัวทีละตัว หากเป็นการใช้ binary search อย่างใน findProductPrice อาจมีการข้ามข้อมูลที่ต้องการค้นหาและทำให้ไม่พบข้อมูลได้
*/
