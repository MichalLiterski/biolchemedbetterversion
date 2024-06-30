const burgerIcon = document.querySelector('.fa-bars')
const xIcon = document.querySelector('.fa-xmark')
const sidebar = document.querySelector('.sidebar')
const allSidebarLi = document.querySelectorAll('.sidebar__list-item')

const handleSidebar = () => {
	sidebar.classList.toggle('active')

	allSidebarLi.forEach(item => {
		item.addEventListener('click', () => {
			sidebar.classList.remove('active')
		})
	})
}

const sidebarRemove = () => {
	sidebar.classList.remove('active')
}

burgerIcon.addEventListener('click', handleSidebar)
xIcon.addEventListener('click', sidebarRemove)

