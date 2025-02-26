import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#ffeceb',
  },
  buttonWrapper: {
    marginBottom: 24,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fffbf3',
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: '#ff6b6b',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 6,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
    borderWidth: 4,
    borderColor: '#ff6b6b',
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#ff3b3b',
    marginBottom: 6,
  },
  date: {
    fontSize: 15,
    color: '#ff9f43',
    fontWeight: '600',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 22,
    borderRadius: 30, // Bo góc tròn đẹp hơn
    backgroundColor: '#ff4757',
    shadowColor: '#ff4757',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.9,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '800',
    fontSize: 18,
    textTransform: 'uppercase', // Chữ in hoa trông mạnh mẽ hơn
    letterSpacing: 1, // Khoảng cách chữ cho đẹp
  },
  cardContent: {
    marginTop: 12,
  },
  description: {
    fontSize: 17,
    color: '#30336b',
    lineHeight: 24,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 12,
  },
  tag: {
    backgroundColor: '#ffbe76',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    color: '#2d3436',
    fontSize: 15,
    fontWeight: '600',
  },
});
